interface SighnUpProps {
  onBack: () => void;
}

const SignUp = ({ onBack }: SighnUpProps) => {
  return (
    <>
      <h1>Hello Brother</h1>
      <button onClickCapture={onBack}>Back</button>
    </>
  );
};

export default SignUp;
