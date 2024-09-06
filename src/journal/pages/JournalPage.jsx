import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* Vista que se muestra cuando no hay nada seleccionado */}
      {/* <NothingSelectedView /> */}
      <NoteView/>
    </JournalLayout>
  )
};
