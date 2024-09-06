import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* Vista que se muestra cuando no hay nada seleccionado */}
      <NothingSelectedView />
    </JournalLayout>
  )
};
