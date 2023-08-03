import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Cards from "./Cards";

const data = [
  { id: 1, title: "Apple" },
  { id: 2, title: "Orange" },
  { id: 3, title: "Banana" },
  { id: 4, title: "Mango" }
];

const Main = () => {
  const [isData, setIsData] = useState(data);
  const onDragEnd = ({ source, destination, draggableId }) => {
    if (!destination) {
      return;
    }

    const form = [...isData];
    const [newId] = form.splice(source.index, 1);
    form.splice(destination.index, 0, newId);
    setIsData(form);
  };

  return (
    <>
      <div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="isData">
            {(provider) => {
              return (
                <div
                  style={{
                    padding: "20px",
                    margin: "10px"
                  }}
                  ref={provider.innerRef}
                  {...provider.droppableProps}
                >
                  <Cards data={isData} />
                  {provider.placeholder}
                </div>
              );
            }}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
};

export default Main;
