import { useState, useMemo, createContext, useCallback } from "react";
import Modal from "react-modal";
import { v4 as uuidv4 } from "uuid";

import TodoItemType from "./types/TodoItemType";
import TodoList from "./components/TodoList";
import EditCategoriesButton from "./components/EditCategoriesButton";
import { modalStyle } from "./utils";
import "./styles/App.css";

Modal.defaultStyles.overlay.backgroundColor = "rgb(0, 0, 0, 0.5)";

const customStyles = modalStyle;

Modal.setAppElement("#root");

export const Context = createContext();

const App = () => {
  let subtitle;

  const getEmptyTodoItem = () => {
    return {
      id: uuidv4(),
      name: "",
      category: "",
      desc: "",
      priority: 1,
      startDate: "",
      isEditing: false,
      isDone: false,
      isExpanded: false,
    };
  };

  const [todoList, setTodoList] = useState<TodoItemType[]>([]); // The list to todo items that will be displayed
  const [todoItem, setTodoItem] = useState<TodoItemType>(getEmptyTodoItem()); // The current todo item that is being created
  // All the list of categories and their colours
  const [categories, setCategories] = useState({
    personal: "#ff0000",
    work: "#00ff00",
    university: "#0000ff",
  });
  const [isCreatingNewCategory, setIsCreatingNewCategory] = useState(false);
  const [categoryInput, setCategoryInput] = useState("");
  const [categoryColour, setCategoryColour] = useState("#ff0000");
  const [modalIsOpen, setIsOpen] = useState(false);

  // States for filters
  const [filterInput, setFilterInput] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  // Modal methods
  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    setTodoItem(getEmptyTodoItem());
    setCategoryInput("");
    setIsCreatingNewCategory(false);
    setIsOpen(false);
  };
  // ---------------------------------

  // Responsible
  // const handleToggleTodoEdit = (id: string, isEditing: boolean) => {
  //   let todoListCopy = [...todoList];
  //   todoListCopy = todoListCopy.map((item: TodoItemType) => {
  //     if (item.id === id) {
  //       item.isEditing = isEditing;
  //     }
  //     return item;
  //   });
  // };

  // When 'Add' is clicked on the modal, a todo item is created.
  const handleAddTodoItem = () => {
    setTodoList([...todoList, todoItem]);
    handleResetTodoItem();
  };

  const handleResetTodoItem = () => {
    setTodoItem(getEmptyTodoItem());
  };

  // Updates a todo item
  //
  const handleUpdateTodoItem = (id: string, todoItem: TodoItemType) => {
    setTodoList(
      todoList.map((item: TodoItemType) => {
        if (item.id === id) {
          return todoItem;
        }
        return item;
      })
    );
  };

  // Responsible for deleting an item by its id
  //
  const handleDeleteTodoItem = (e, id: string) => {
    e.stopPropagation();
    let todoListCopy = [...todoList];
    todoListCopy = todoListCopy.filter((item: TodoItemType) => item.id !== id);
    setTodoList(todoListCopy);
  };

  // Responsible for toggling an item between completed and uncompleted
  //
  const handleToggleIsDoneTodoItem = (id: string) => {
    setTodoList(
      todoList.map((item: TodoItemType) => {
        if (item.id === id) {
          item.isDone = !item.isDone;
        }
        return item;
      })
    );
  };

  // Responsible for the creation of a new category
  //
  const handleAddCategory = () => {
    if (categoryInput.trim() !== "") setIsCreatingNewCategory(false);
    setCategories({ ...categories, [categoryInput]: categoryColour });
    setTodoItem({ ...todoItem, category: categoryInput });
    setCategoryInput("");
  };

  // Responsible for expanding or minimising a todo item
  //
  const handleToggleExpandItem = (id: string) => {
    setTodoList(
      todoList.map((item: TodoItemType) => {
        if (item.id === id) {
          item.isExpanded = !item.isExpanded;
        }
        return item;
      })
    );
  };

  // Responsible for changing to the next priority when the
  // priority circle on a todo item is clicked
  //
  const handleNextPriorityItem = (id: string) => {
    setTodoList(
      todoList.map((item: TodoItemType) => {
        if (item.id === id) {
          item.priority += 1;
          if (item.priority > 3) {
            item.priority = 1;
          }
        }
        return item;
      })
    );
  };

  // Responsible for removing all items that are completed
  //
  const handleRemoveCompletedItems = () => {
    setTodoList(
      todoList.filter((item: TodoItemType) => {
        return !item.isDone;
      })
    );
  };

  // Filters todo items by text; checks their name and description.
  // We use useMemo as we want to get the updated filtered values only when
  // the user types in the textbox.
  //
  // const filterByText = useMemo(() => {
  //   if (filterInput.trim() === "") {
  //     return <TodoList todoList={todoList} />;
  //   } else {
  //     let todoListFiltered = todoList.filter((item: TodoItemType) => {
  //       const filterTrimLower = filterInput.trim().toLowerCase();
  //       return (
  //         item.name.includes(filterTrimLower) ||
  //         item.desc.includes(filterTrimLower)
  //       );
  //     });
  //     return <TodoList todoList={todoListFiltered} />;
  //   }
  // }, [todoList, filterInput]);

  const filterByText = (items: TodoItemType[]) => {
    if (filterInput.trim() === "") {
      return items;
    } else {
      let itemsFiltered = items.filter((item: TodoItemType) => {
        const filterTrimLower = filterInput.trim().toLowerCase();
        return (
          item.name.includes(filterTrimLower) ||
          item.desc.includes(filterTrimLower)
        );
      });
      return itemsFiltered;
    }
  };

  // const filterByCategory = useCallback(
  //   (items: TodoItemType[]) => {
  //     console.log("FILTER BY CATEGORY EXECUTED");
  //     if (filterCategory === "") {
  //       return items;
  //     } else {
  //       let itemsFiltered = items.filter((item: TodoItemType) => {
  //         return item.category == filterCategory;
  //       });
  //       return itemsFiltered;
  //     }
  //   },
  //   [todoList, filterInput, filterCategory]
  // );

  // // Filters todo items by category
  const filterByCategory = (items: TodoItemType[]) => {
    console.log("FILTER BY CATEGORY EXECUTED");
    if (filterCategory === "") {
      return items;
    } else {
      let itemsFiltered = items.filter((item: TodoItemType) => {
        return item.category == filterCategory;
      });
      return itemsFiltered;
    }
  };

  const filterItems = useMemo(() => {
    let filteredList = [...todoList];
    filteredList = filterByText(filteredList);
    filteredList = filterByCategory(filteredList);
    return <TodoList todoList={filteredList} />;
  }, [todoList, filterInput, filterCategory]);

  const getCompletedItems = useMemo(() => {
    let completedItems = 0;
    todoList.forEach((x, _) => {
      if (x.isDone) {
        completedItems += 1;
      }
    });
    return completedItems;
  }, [todoList]);

  const getCurrentDate = () => {
    const date = new Date();
    const fulldate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    return fulldate;
  };

  getCurrentDate();
  return (
    <>
      {/* ------------------------------------ */}
      <div className="toolbar">
        <button onClick={openModal} className="btn-new-todo">
          NEW TODO
        </button>
        {/* <EditCategoriesButton categories={categories} /> */}
        <input
          type="text"
          className="input"
          placeholder="Filter by name and description"
          value={filterInput}
          onChange={(e) => {
            setFilterInput(e.target.value);
          }}
        />
        <select
          style={{ color: categories[filterCategory] }}
          name="categories"
          id="categories"
          defaultValue=""
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">None</option>
          {/* {categories.map((category) => {
                    return <option value={category}>{category}</option>;
                  })} */}
          {Object.keys(categories).map((categoryName: string) => {
            return (
              <option
                style={{ color: categories[categoryName] }}
                value={categoryName}
              >
                {categoryName}
              </option>
            );
          })}
        </select>
        {getCompletedItems > 0 && (
          <button
            onClick={handleRemoveCompletedItems}
            className="btn-remove-completed"
          >
            REMOVE COMPLETED
          </button>
        )}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-heading">
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>New Todo</h2>
          <button className="close-modal-btn" onClick={closeModal}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="todo-inputs">
          <input
            className="modal-input"
            type="text"
            placeholder="Name"
            value={todoItem.name}
            onChange={(e) => setTodoItem({ ...todoItem, name: e.target.value })}
          />
          <textarea
            className="modal-input"
            placeholder="Further description"
            value={todoItem.desc}
            onChange={(e) => setTodoItem({ ...todoItem, desc: e.target.value })}
          />
          <div className="priority-section">
            <label>Priority</label>
            <div>
              <button
                className={"low" + (todoItem.priority === 1 ? " selected" : "")}
                onClick={() => setTodoItem({ ...todoItem, priority: 1 })}
              >
                Low
              </button>
              <button
                className={
                  "medium" + (todoItem.priority === 2 ? " selected" : "")
                }
                onClick={() => setTodoItem({ ...todoItem, priority: 2 })}
              >
                Medium
              </button>
              <button
                className={
                  "high" + (todoItem.priority === 3 ? " selected" : "")
                }
                onClick={() => setTodoItem({ ...todoItem, priority: 3 })}
              >
                High
              </button>
            </div>
          </div>
          <div className="category-section">
            <label>Category</label>

            <div className="category-buttons">
              {!isCreatingNewCategory && (
                <select
                  style={{ color: categories[todoItem.category] }}
                  name="categories"
                  id="categories"
                  defaultValue=""
                  value={todoItem.category}
                  onChange={(e) =>
                    setTodoItem({ ...todoItem, category: e.target.value })
                  }
                >
                  <option value="">None</option>
                  {/* {categories.map((category) => {
                    return <option value={category}>{category}</option>;
                  })} */}
                  {Object.keys(categories).map((categoryName: string) => {
                    return (
                      <option
                        style={{ color: categories[categoryName] }}
                        value={categoryName}
                      >
                        {categoryName}
                      </option>
                    );
                  })}
                </select>
              )}

              <button
                onClick={() => setIsCreatingNewCategory(!isCreatingNewCategory)}
                className="btn-new-category-modal"
              >
                {isCreatingNewCategory ? "Cancel" : "New"}
              </button>
            </div>
            {isCreatingNewCategory && (
              <>
                <div>
                  <input
                    className="modal-input"
                    type="text"
                    placeholder="Name"
                    value={categoryInput}
                    onChange={(e) => setCategoryInput(e.target.value)}
                  />
                  <input
                    type="color"
                    value={categoryColour}
                    onChange={(e) => setCategoryColour(e.target.value)}
                  />
                </div>
                <button
                  className="btn-add-item-modal"
                  onClick={handleAddCategory}
                >
                  Add
                </button>
              </>
            )}
          </div>
          <input type="date" name="" className="input" min={getCurrentDate()} />
          <button
            className="btn-add-item-modal"
            onClick={() => {
              if (todoItem.name.trim() !== "") {
                handleAddTodoItem();
                closeModal();
              }
            }}
          >
            Add
          </button>
        </div>
      </Modal>
      {/* ---------------------------------- */}

      {/* <button onClick={() => setIsCreatingNewTodoItem(!isCreatingNewTodoItem)}>{isCreatingNewTodoItem ? "Cancel" : "New"}</button> */}
      {/* {isCreatingNewTodoItem && (
        
      )} */}
      <Context.Provider
        value={{
          categories,
          handleUpdateTodoItem,
          handleDeleteTodoItem,
          handleToggleIsDoneTodoItem,
          handleToggleExpandItem,
          handleNextPriorityItem,
        }}
      >
        {filterItems}
        {/* <TodoList todoList={todoList} onToggleTodoEdit={handleToggleTodoEdit} /> */}
      </Context.Provider>
    </>
  );
};

export default App;
