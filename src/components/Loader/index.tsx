
interface ILoader{
    className?: string;
}
export default function Loader3(props: ILoader) {
  return (
    <>
      <div
        className={`iq-loader-box d-flex justify-content-center align-items-center ${props.className}`}
      >
        <div className="iq-loader-3">
          <div className="loader-outter"></div>
            <div className="loader-inner"></div>
        </div>
      </div>
    </>
  );
}