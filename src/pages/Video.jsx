export default function Video({ children }) {
  return (
    <>
      <div className="w-[95%] md:w-[80%] flex  flex-col">
        <div className=" m-3 h-[40%] w-[100%] justify-self-center md:h-[70%] md:w-[95%] md:mt-5  md:ml-5 rounded-md bg-neutral-800">
          {children}
        </div>
      </div>
    </>
  );
}
