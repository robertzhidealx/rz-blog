import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";
import TypeWriter from "../components/TypeWriter";
import Triangles from "../components/triangles";
import RzAnimation from "../components/rzAnimation";

interface Props {
  allPostsData: any;
}

const Home: React.FC<Props> = ({ allPostsData }) => {
  return (
    <Layout>
      <div className='flex flex-col items-center w-full h-full'>
        <Head>
          <title>Robert Zhang</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        {/* <Triangles /> */}

        <TypeWriter />

        <div>
          <div>
            {allPostsData.map(({ id, date, title }: any) => (
              <div className='' key={id}>
                <Link href={`/posts/${id}`}>
                  <a className='link'>{title}</a>
                </Link>
                <br />
                <small className=''>
                  <Date dateString={date} />
                </small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
