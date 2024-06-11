import cl from './MyModal.module.css';

export const MyModal = ({ children, visible, setVisible }) => {
  const classesRoot = [cl.myModal];
  if (visible) {
    classesRoot.push(cl.active);
  }
  return (
    <div onClick={() => setVisible(false)} className={classesRoot.join(' ')}>
      <div className={cl.myContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
