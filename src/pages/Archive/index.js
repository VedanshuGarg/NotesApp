import { Fragment } from "react";
import { Navbar } from "../../components/Navbar";
import { SideBar } from "../../components/Sidebar";
import { NotesCard } from "../../components/NotesCard";
import { useNotes } from "../../context/notes-context";

export const Archive = () => {
  const { notes } = useNotes();

  const archiveNotes =
    notes?.length > 0 && notes.filter(({ isArchive }) => isArchive);

  return (
    <Fragment>
      <Navbar />
      <main className="flex gap-3">
        <SideBar />
        <div className="flex flex-col w-screen mt-5">
          <div className="font-bold text-center sm:text-left">Archived Notes</div>
          <div className="ml-5 flex flex-col gap-5">
            {archiveNotes?.length > 0 && (
              <div>
                <div className="flex flex-wrap gap-6">
                  {archiveNotes?.length > 0 &&
                    archiveNotes.map(
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
