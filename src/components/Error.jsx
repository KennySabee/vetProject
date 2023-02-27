const Error = ({children}) => {
  return (
    <div className="bg-red-800 p-3 text-center font-bold text-white mb-5 uppercase rounded-md">
      <p>{children}</p> {/*  //Children es un prop de react y sirve para pasar bastante codigo de html y evitar usar muchos props en este caso se pasa solo un p */}
    </div>
  );
};

export default Error;
