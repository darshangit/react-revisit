// const WithClass = props => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// );


const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props}></WrappedComponent>
    </div>
  );
};

export default withClass;
