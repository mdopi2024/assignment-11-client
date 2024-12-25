import React, { useEffect, useState } from 'react';
import Bookscard from '../../components/BooksCard/Bookscard';
import useAxiosSucure from '../../hooks/useAixosSecure/useAxiosSucure';
import DynamicTitle from '../../components/DynamicTitle/DynamicTitle';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';



const AllBooks = () => {
  const [allBooks, setAllbooks] = useState([])
  const axiosSucure = useAxiosSucure()
  const [viewType, setViewType] = useState(true)
  console.log(viewType)
  useEffect(() => {
    axiosSucure.get(`${import.meta.env.VITE_URL}/books`)
      .then(data => {
        setAllbooks(data.data)
      })
  }, [])

  const handleAbailableBook = () => {
    const filter = allBooks.filter(book => book.quantity !== 0)
    setAllbooks(filter)
  }

  return (
    <div>
      <div><DynamicTitle title='All Books'></DynamicTitle></div>

      <div className='flex justify-end items-center gap-5 px-10'>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn  border-2 border-green-500 hover:bg-green-600 font-bold mt-5 bg-white">View type</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li className='hover:bg-green-600 hover:font-bold rounded-lg'><button onClick={() => setViewType(true)}>Card View</button></li>
            <li className='hover:bg-green-600 hover:font-bold rounded-lg'><button onClick={() => setViewType(false)}>Table View</button></li>
          </ul>
        </div>
        <div>
          <button onClick={handleAbailableBook} className='btn border-2 border-green-500 hover:bg-green-600 font-bold mt-5 bg-white '>Show Available Books </button>
        </div>
      </div>
      <div>
        {
          viewType ?
            <div className='my-16 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4   mx-5 md:mx-10'>
              {
                allBooks.map(book => <Bookscard key={book._id} book={book}></Bookscard>)
              }
            </div>
            :
            <section className='my-10'>
              <div className="overflow-x-auto mx-10">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      
                      <th>Book Name</th>
                      <th>Author Name</th>
                      <th>Book Type</th>
                      <th>Book Quantity</th>
                      <th>Update</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {
                      allBooks.map(book =>
                        <tr key={book._id}>

                          <td>
                            <div className="flex items-center gap-3">
                              <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                  <img
                                    src={book.photo}
                                    alt="Avatar Tailwind CSS Component" />
                                </div>
                              </div>
                              <div>
                                <div className="font-bold">{book.name}</div>

                              </div>
                            </div>
                          </td>
                          <td>{book.author_name}</td>
                          <td >
                           <span className={`border px-8 rounded-xl py-1 
                            ${book.category==='Drama' && 'bg-green-300'}
                            ${book.category==='History' &&'bg-orange-100'}
                            ${book.category==='e.g., Novel' &&'bg-blue-100'}
                            ${book.category==='Sci-Fi' &&'bg-purple-100'}

                            `}> {book.category}</span>

                          </td>
                          <td>{book.quantity}</td>
                          <th>
                          <Link to={`/update/${book._id}`} ><FaEdit className='text-xl'/></Link >
                          </th>
                        </tr>
                      )
                    }

                  </tbody>
                </table>
              </div>
            </section>
        }
      </div>
    </div>
  );
};

export default AllBooks;