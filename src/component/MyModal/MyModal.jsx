import cl from "./MyModal.module.css";

export const MyModal = ({ children, visible, setVisible }) => {
  const modalClassName = [cl.myModal, visible && cl.active].join(" ");

  return (
    <div onClick={() => setVisible(false)} className={modalClassName}>
      <div className={cl.myContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
