import { v4 as uuid } from "uuid";

export const notesReducer = (state, { type, payload }) => {
  switch (type) {
    case "TITLE":
      return {
        ...state,
        title: payload,
      };
    case "TEXT":
      return {
        ...state,
        text: payload,
      };
    case "ADD_NOTE":
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            text: state.text,
            title: state.title,
            id: uuid(),
            isArchive: false,
            isPinned: false,
            isDelete: false,
          },
        ],
      };
    case "CLEAR_INPUT":
      return {
        ...state,
        title: "",
        text: "",
      };
    case "PIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: true } : note
        ),
      };
    case "UNPIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: false } : note
        ),
      };
    case "ADD_TO_ARCHIVE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isArchive: true } : note
        ),
      };
    case "REMOVE_FROM_ARCHIVE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id
            ? { ...note, isArchive: false, isPinned: false, isDelete: false }
            : note
        ),
      };
    case "ADD_TO_BIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id
            ? { ...note, isDelete: true, isPinned: false }
            : note
        ),
      };
    case "REMOVE_FROM_BIN":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== payload.id),
      };
    default:
      return state;
  }
};
