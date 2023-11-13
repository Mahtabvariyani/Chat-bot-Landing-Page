import { Sloutionposts } from "@/constant";


export default function Example() {
  return (
    <div className="sloution py-24 sm:py-32 mt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
          Fendous AI Chatbot is 
          </h2>
          <p className="mt-2 text-xl text-bold leading-8 text-gray-400">
            a powerful tool that can help businesses of
            all sizes improve their project management and CRM processes. It
            offers a variety of features that can help businesses to:
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {Sloutionposts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col rounded-md  p-8 items-start justify-between"
            >
            
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-200 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
