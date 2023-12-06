import ReactLoading from "react-loading";

export default function LoadingAnimation() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <ReactLoading height={50} width={50} type={"cylon"} color={"blue"} />;
    </div>
  );
}
