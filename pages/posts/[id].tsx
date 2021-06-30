import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";

export const getStaticProps = async ({ params }: any) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

interface PostProps {
  postData: any;
}

const Post: React.FC<PostProps> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className='flex flex-col items-center w-full h-auto'>
        <div className='p-10 w-navw h-full'>
          <div className='text-posttitle w-full h-auto font-bold'>
            {postData.title}
          </div>
          <Date
            dateString={postData.date}
            className='text-postdate mt-postp w-full h-auto tracking-wide opacity-50'
          />
          <div
            className='text-postcontent mt-postp font-lyon'
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
        </div>
      </div>
    </Layout>
  );
};

export default Post;
