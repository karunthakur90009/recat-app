import { Draggable } from "react-beautiful-dnd";
import Card from "../component/Card";

const Cards = ({ data }) => {
  return (
    <>
      {data.map(({ title, id }, index) => (
        <Draggable draggableId={id} key={id} index={index}>
          {(provider) => {
            return (
              <>
                <div
                  ref={provider.innerRef}
                  {...provider.draggableProps}
                  {...provider.dragHandleProps}
                >
                  <Card>
                    <span>
                      <p>{title}</p>
                    </span>
                    <span>
                      <img src="" alt="" />
                    </span>
                  </Card>
                </div>
              </>
            );
          }}
        </Draggable>
      ))}
    </>
  );
};

export default Cards;
