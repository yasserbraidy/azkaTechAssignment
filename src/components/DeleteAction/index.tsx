import SweetAlert from "../SweetAlert";
interface IDeleteAction {
    deleteAction: () => void;
    intended: string;
    children: React.ReactNode;
}

export default function DeleteAction(props: IDeleteAction) {
    const { deleteAction, intended, children} = props;
    return (
      <SweetAlert
        title={`Delete ${intended}`}
        text={`Are you sure you want to delete this ${intended}?`}
        icon="warning"
        confirmButtonText="Delete"
        showDenyButton
        denyButtonText={`Don't Delete`}
        backdrop={`rgba(60,60,60,0.8)`}
        showDenyAlert
        deniedTitle="Denied!"
        deniedText={`You cancelled the deletion.`}
        deniedIcon="error"
        onConfirm={deleteAction}
      >
        {children}
      </SweetAlert>
    );
}