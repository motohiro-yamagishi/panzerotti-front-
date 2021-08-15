import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import pizza from "../public/image/friedpizza.jpeg";

export default function Home() {
  return (
    <Layout>
      <div className="w-full relative">
        <img
          className="object-cover w-full h-screen md:h-96"
          src="image/friedpizza.jpeg"
          alt="topic"
        />
        <div className="absolute top-3/4 md:top-1/4 left-auto md:left-1/4 text-white font-bold font-mono text-2xl md:text-5xl p-3">
          イタリアの日常を
          <p className="text-white text-xl md:text-2xl font-light">
            I wish that for you. Stay Hungry. Stay Foolish. Thank you all very
            much.
          </p>
        </div>
      </div>
      <div className="mt-14 text-gray-600 font-semibold font-sans text-lg md:text-xl">
        商品一覧
      </div>
      <div className="md:flex justify-between mt-10">
        <div className="bg-white shadow p-3 rounded lg:w-64 m-5 md:m-14">
          <div className="my-6">
            <p className="text-lg text-bold tracking-wide text-gray-600 mb-2">
              マルゲリータ
            </p>
            <p className="text-sm text-gray-600 font-hairline">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <div className="relative bg-cover bg-center bg-gray-300 h-32">
              <Image
                src={pizza}
                className="rounded"
                layout="fill"
                objectFit="cover"
                alt="topic"
              />
            </div>
          </div>
          <div className="mt-6">
            <button className="rounded shadow-md flex items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              カートに入れる
            </button>
          </div>
        </div>
        <div className="bg-white shadow p-3 rounded lg:w-64 m-5 md:m-14">
          <div className="my-6">
            <p className="text-lg text-bold tracking-wide text-gray-600 mb-2">
              シーフード
            </p>
            <p className="text-sm text-gray-600 font-hairline">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <div className="relative bg-cover bg-center bg-gray-300 h-32">
              <Image
                src={pizza}
                className="rounded"
                layout="fill"
                objectFit="cover"
                alt="topic"
              />
            </div>
          </div>
          <div className="mt-6">
            <button className="rounded shadow-md flex items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              カートに入れる
            </button>
          </div>
        </div>
        <div className="bg-white shadow p-3 rounded lg:w-64 m-5 md:m-14">
          <div className="my-6">
            <p className="text-lg text-bold tracking-wide text-gray-600 mb-2">
              Title
            </p>
            <p className="text-sm text-gray-600 font-hairline">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <div className="relative bg-cover bg-center bg-gray-300 h-32">
              <Image
                src={pizza}
                className="rounded"
                layout="fill"
                objectFit="cover"
                alt="topic"
              />
            </div>
          </div>
          <div className="mt-6">
            <button className="rounded shadow-md flex items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              カートに入れる
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex justify-between mb-10">
        <div className="bg-white shadow p-3 rounded lg:w-64 m-5 md:m-14">
          <div className="my-6">
            <p className="text-lg text-bold tracking-wide text-gray-600 mb-2">
              マルゲリータ
            </p>
            <p className="text-sm text-gray-600 font-hairline">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <div className="relative bg-cover bg-center bg-gray-300 h-32">
              <Image
                src={pizza}
                className="rounded"
                layout="fill"
                objectFit="cover"
                alt="topic"
              />
            </div>
          </div>
          <div className="mt-6">
            <button className="rounded shadow-md flex items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              カートに入れる
            </button>
          </div>
        </div>
        <div className="bg-white shadow p-3 rounded lg:w-64 m-5 md:m-14">
          <div className="my-6">
            <p className="text-lg text-bold tracking-wide text-gray-600 mb-2">
              シーフード
            </p>
            <p className="text-sm text-gray-600 font-hairline">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <div className="relative bg-cover bg-center bg-gray-300 h-32">
              <Image
                src={pizza}
                className="rounded"
                layout="fill"
                objectFit="cover"
                alt="topic"
              />
            </div>
          </div>
          <div className="mt-6">
            <button className="rounded shadow-md flex items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              カートに入れる
            </button>
          </div>
        </div>
        <div className="bg-white shadow p-3 rounded lg:w-64 m-5 md:m-14">
          <div className="my-6">
            <p className="text-lg text-bold tracking-wide text-gray-600 mb-2">
              Title
            </p>
            <p className="text-sm text-gray-600 font-hairline">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <div className="relative bg-cover bg-center bg-gray-300 h-32">
              <Image
                src={pizza}
                className="rounded"
                layout="fill"
                objectFit="cover"
                alt="topic"
              />
            </div>
          </div>
          <div className="mt-6">
            <button className="rounded shadow-md flex items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              カートに入れる
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
