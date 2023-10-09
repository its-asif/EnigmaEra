

const Books = () => {
  const books = [
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      description: "Explore the history of humanity from the emergence of Homo sapiens to the present day, covering the impact of technology on society."
    },
    {
      title: "Ready Player One",
      author: "Ernest Cline",
      description: "Immerse yourself in a thrilling virtual reality adventure where the protagonist navigates a high-stakes game within a dystopian future."
    },
    {
      title: "The Innovators",
      author: "Walter Isaacson",
      description: "Delve into the stories of the pioneers who shaped the digital age, from Ada Lovelace to Steve Jobs."
    },
    {
      title: "Snow Crash",
      author: "Neal Stephenson",
      description: "A cyberpunk classic that takes you on a fast-paced journey through a futuristic, hyper-connected world."
    },
    {
      title: "Masters of Doom",
      author: "David Kushner",
      description: "Learn about the rise of id Software and the creation of iconic games like Doom and Quake."
    },
    {
      title: "The Code Book",
      author: "Simon Singh",
      description: "Uncover the fascinating history of cryptography and its role in shaping the world of technology."
    },
    {
      title: "Console Wars",
      author: "Blake J. Harris",
      description: "Explore the intense competition between Sega and Nintendo during the golden age of video games."
    },
    {
      title: "The Circle",
      author: "Dave Eggers",
      description: "A thought-provoking novel that delves into the dark side of technology and the impact of a powerful tech company on society."
    },
    {
      title: "Hackers",
      author: "Steven Levy",
      description: "Take a trip back to the early days of computing and the culture of the original hackers who shaped the industry."
    },
    {
      title: "The Art of Game Design",
      author: "Jesse Schell",
      description: "A comprehensive guide to game design principles, offering valuable insights for aspiring game developers."
    },
  ];

  return (
    <div className="w-3/4 mx-auto text-justify">
      <h2 className="text-4xl text-center my-8 font-semibold">Book Recommendations</h2>
      <ul className="list-disc">
        {books.map((book, index) => (
          <li key={index} className="mb-5">
            <span className="text-2xl font-semibold mr-3">{book.title}</span><span className="font-semibold"> by {book.author}</span>
            <p className="mt-1">{book.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
