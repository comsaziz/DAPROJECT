function Viedo() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <div className="max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="border-[#f5f5f5] bg-[#f5f5f5] h-auto flex flex-col justify-between p-4">
            <h1 className="text-5xl font-bold mb-10">Latest Reviews</h1>

            <figure>
              <img
                className="w-full h-auto object-cover"
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSPTDQQCJK2RI-r_726PR6pYoghLasA5Xvidy2gJBTbXgY5oBXT"
                alt="Latest Reviews"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl font-bold">
                Dianna Adams visits the Sooto Restaurant | Uncovered Miami
              </h2>
              <p className="mt-2 text-gray-500">
                A consectetur eget ultrices nec velit purus quam dignissim purus
                gravida aliquam mattis ultrices eget ultricies tincidunt et erat
                enim vitae sollicitudin tellus placerat.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 mt-10 lg:mt-0">
            <div className="bg-[#f5f5f5] p-4 flex items-center justify-start h-auto">
              <figure className="w-1/4 h-full mr-4">
                <img
                  className="w-full h-auto object-cover lg:mt-7"
                  src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-2.jpg"
                  alt="Card 2 Image"
                />
              </figure>
              <div className="flex-1">
                <h2 className="card-title text-xl font-bold">
                  Family Dinner - Latea pulvinar scelerisque diam tempus
                  facilisi
                </h2>
                <p className="mt-2 text-gray-500">
                  Enim imperdiet fames nisl, purus et diam aliquet.
                </p>
              </div>
            </div>
            <div className="bg-[#f5f5f5] p-4 flex items-center justify-start h-auto">
              <figure className="w-1/4 h-full mr-4">
                <img
                  className="w-full h-auto object-cover lg:mt-7"
                  src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-3.jpg"
                  alt="Card 3 Image"
                />
              </figure>
              <div className="flex-1">
                <h2 className="card-title text-xl font-bold">
                  Lobortis turpis turpis vehicula laoreet egestas enim ornare
                </h2>
                <p className="mt-2 text-gray-500">
                  Enim imperdiet fames nisl, purus et diam aliquet.
                </p>
              </div>
            </div>
            <div className="bg-[#f5f5f5] p-4 flex items-center justify-start h-auto">
              <figure className="w-1/4 h-full mr-4">
                <img
                  className="w-full h-auto object-cover lg:mt-7"
                  src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-4.jpg"
                  alt="Card 4 Image"
                />
              </figure>
              <div className="flex-1">
                <h2 className="card-title text-xl font-bold">
                  Tempus quis ac viverra condimentum sit nulla viverra
                </h2>
                <p className="mt-2 text-gray-500">
                  Enim imperdiet fames nisl, purus et diam aliquet.
                </p>
              </div>
            </div>
            <div className="bg-[#f5f5f5] p-4 flex items-center justify-start h-auto">
              <figure className="w-1/4 h-full mr-4">
                <img
                  className="w-full h-auto object-cover lg:mt-7"
                  src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-5.jpg"
                  alt="Card 5 Image"
                />
              </figure>
              <div className="flex-1">
                <h2 className="card-title text-xl font-bold">
                  Quis mauris egestas enim urna dictum
                </h2>
                <p className="mt-2 text-gray-500">
                  Enim imperdiet fames nisl, purus et diam aliquet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button className="border-solid font-Georgia border-[#c99484] border-[1px] text-[#c99484] px-10 py-2 hover:bg-[#c99484]">
            VIEW ALL VIDEOS
          </button>
        </div>
      </div>
    </div>
  );
}

export default Viedo;
