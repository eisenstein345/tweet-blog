function ErrorMessageDiv(props) {
  const { message } = props;
  return <div className="server-error">{message}</div>;
}

export default ErrorMessageDiv;
