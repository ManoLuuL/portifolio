import Image from "next/image";
import Teste from "../../assets/img.jpg";

export const CardProjects = () => {
  return (
    <>
      <div className="hover:scale-110 transition duration-200">
        <div className="after:bg-gradient-to-r from-blue-400 to-blue-600">
          <Image
            alt="The Movie Guide"
            className="rounded-lg mb-2"
            height="200"
            src={Teste}
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
        </div>
        <h3 className="text-xl font-semibold">The Movie Guide</h3>
        <div className="flex space-x-2 mt-1">
          <div className="text-blue-400">a</div>
          <div className="text-blue-300">b</div>
          <div className="text-pink-400">c</div>
        </div>
      </div>
      <div className="hover:scale-110 transition duration-200">
        <Image
          alt="The Movie Guide"
          className="rounded-lg mb-2"
          height="200"
          src={Teste}
          style={{
            aspectRatio: "300/200",
            objectFit: "cover",
          }}
          width="300"
        />
        <h3 className="text-xl font-semibold">The Movie Guide</h3>
        <div className="flex space-x-2 mt-1">
          <div className="text-blue-400">a</div>
          <div className="text-blue-300">b</div>
          <div className="text-pink-400">c</div>
        </div>
      </div>
      <div className="hover:scale-110 transition duration-200">
        <Image
          alt="The Movie Guide"
          className="rounded-lg mb-2"
          height="200"
          src={Teste}
          style={{
            aspectRatio: "300/200",
            objectFit: "cover",
          }}
          width="300"
        />
        <h3 className="text-xl font-semibold">The Movie Guide</h3>
        <div className="flex space-x-2 mt-1">
          <div className="text-blue-400">a</div>
          <div className="text-blue-300">b</div>
          <div className="text-pink-400">c</div>
        </div>
      </div>
    </>
  );
};
