import { useNotes } from "../../context/notes-context";

export const NotesCard = ({
  id,
  title,
  text,
  isArchive,
  isPinned,
  isDelete,
}) => {
  const { notesDispatch } = useNotes();

  const onPinClick = (id) => {
    !isPinned
      ? notesDispatch({
          type: "PIN",
          payload: { id },
        })
      : notesDispatch({
          type: "UNPIN",
          payload: { id },
        });
  };

  const onArchiveClick = (id) => {
    !isArchive
      ? notesDispatch({
          type: "ADD_TO_ARCHIVE",
          payload: { id },
        })
      : notesDispatch({
          type: "REMOVE_FROM_ARCHIVE",
          payload: { id },
        });
  };

  const onBinClick = (id) => {
    !isDelete
      ? notesDispatch({
          type: "ADD_TO_BIN",
          payload: { id },
        })
      : notesDispatch({
          type: "REMOVE_FROM_BIN",
          payload: { id },
        });
  };

  return (
    <div
      className="w-56 border border-neutral-800 p-2 rounded-md w-[300px]"
      key={id}
    >
      <div className="flex justify-between border-b-2">
        <p>{title}</p>
        {!isArchive && !isDelete ? (
          <button onClick={() => onPinClick(id)}>
            <span title={isPinned ? "Unpin" : "Pin"}
              className={
                isPinned ? "material-icons" : "material-icons-outlined"
              }
            >
              push_pin
            </span>
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className="flex flex-col">
        <p>{text}</p>
        <div className="ml-auto">
          <button onClick={() => onArchiveClick(id)}>
            <span title={isArchive ? "Unarchive" : "Archive"}
              className={
                isArchive ? "material-icons" : "material-icons-outlined"
              }
            >
              archive
            </span>
          </button>
          {isArchive ? (
            <></>
          ) : (
            <button onClick={() => onBinClick(id)}>
              <span title={isDelete ? "Delete forever" : "Delete Note"}
                className={
                  isDelete ? "material-icons" : "material-icons-outlined"
                }
              >
                delete
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
