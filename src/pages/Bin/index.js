import { Fragment } from "react";
import { Navbar } from "../../components/Navbar";
import { SideBar } from "../../components/Sidebar";
import { NotesCard } from "../../components/NotesCard";
import { useNotes } from "../../context/notes-context";

export const Bin = () => {
  const { notes } = useNotes();

  const binNotes =
    notes?.length > 0 && notes.filter(({ isArchive, isDelete }) => isDelete && !isArchive);

  return (
    <Fragment>
      <Navbar />
      <main className="flex gap-3">
        <SideBar />
        <div className="flex flex-col w-screen mt-5">
          <div className="font-bold text-center sm:text-left">Deleted Notes</div>
          <div className="ml-5 flex flex-col gap-5">
            {binNotes?.length > 0 && (
              <div>
                <div className="flex flex-wrap gap-6">
                  {binNotes?.length > 0 &&
                    binNotes.map(
                      ({ id, title, text, isArchive, isPinned, isDelete }) => (
                        <NotesCard
                          key={id}
                          id={id}
                          title={title}
                          text={text}
                          isArchive={isArchive}
                          isPinned={isPinned}
                          isDelete={isDelete}
                        />
                      )
                    )}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </Fragment>
  );
};
