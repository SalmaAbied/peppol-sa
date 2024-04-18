import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Props = {
  blog?: BlogPost;
};

function BlogArticle({ blog }: Props) {
  const { t } = useTranslation();
  
  return (
    <>
      <div className="flex items-center justify-between mb-8 container">
        <a href='/Blog' className="flex items-center space-x-2">
          <ArrowLeft className='mr-3' />
          {t('Blog.Back')}
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mb-20">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{blog?.articleTitle}</h2>
          <h3 className="text-sm md:text-base text-gray-500 uppercase mb-4">{t('Blog.About')} {blog?.subtitle}</h3>
          
          {blog?.articlePartOne && (
            <div>
              {blog.articlePartOne.title && <h4 className="font-semibold text-xl">{blog.articlePartOne.title}</h4>}
              <p className="text-base md:text-lg mb-4">{blog.articlePartOne.content}</p>
            </div>
          )}
          {blog?.articlePartTwo && (
            <div>
              {blog.articlePartTwo.title && <h4 className="font-semibold text-xl">{blog.articlePartTwo.title}</h4>}
              <p className="text-base md:text-lg mb-4">{blog.articlePartTwo.content}</p>
            </div>
          )}
          <figure className="relative my-10">
            {blog && (blog.extraImg || blog.imageUrl) && (
              <img className="w-full object-contain" src={blog.extraImg || blog.imageUrl} alt={blog.title} />
            )}
          </figure>
        </div>
        <div>
          {blog?.articlePartThree && (
              <div>
                {blog.articlePartThree.title && <h4 className="font-semibold text-xl">{blog.articlePartThree.title}</h4>}
                <p className="text-base md:text-lg mb-4">{blog.articlePartThree.content}</p>
              </div>
            )}
          <figure className="relative my-10">
              {blog && (blog.extraImg || blog.imageUrl) && (
                <img className="w-full object-contain" src={blog.extraImg1 || blog.imageUrl} alt={blog.title} />
              )}
          </figure>
          {blog?.articlePartFour && (
              <div>
                {blog.articlePartFour.title && <h3 className="font-semibold text-xl">{blog.articlePartFour.title}</h3>}
                <p className="text-base md:text-lg mb-4">{blog.articlePartFour.content}</p>
              </div>
          )}

          {blog?.articlePartFive && (
              <div>
                {blog.articlePartFive.title && <h3 className="font-semibold text-xl">{blog.articlePartFive.title}</h3>}
                <p className="text-base md:text-lg mb-4">{blog.articlePartFive.content}</p>
              </div>
          )}
        </div>
       
      </div>
      <div className='container mx-auto grid grid-cols-2'>
        <p className='italic'>
          {t('Blog.Questions')}
          <a href="mailto:hallo@qastan.be" className='text-legoOrange font-bold'> hallo@qastan.be</a>
        </p>
      </div>
      <div className='flex justify-center mb-20'>
        <a href='/Blog' className="w-fit font-bold bg-legoOrange mb-3 mt-2 md:mt-0 mr-2 md:mr-0 px-5 py-3 text-sm text-white transition duration-500 hover:bg-legoBlue">{t('Blog.Back')}</a> 
      </div>
    </>
  );
}

export default BlogArticle;