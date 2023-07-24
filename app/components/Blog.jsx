import Image from 'next/image'

export default function Blog() {
  return (
    <div className="">
      <div className="w-1/2 mx-auto h-96 mb-4">
        <Image
          src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
          width={320}
          height={160}
          alt="Picture of the author"
          className="rounded-t-md max-h-96 w-full"
        />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          tempore! Officiis sapiente deleniti ad reiciendis animi! Ipsa, animi?
          Delectus quam iusto ipsum eligendi aliquam excepturi doloremque
          voluptatibus optio praesentium laudantium. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Doloremque distinctio cupiditate
          provident necessitatibus tempora architecto, velit enim eos, magnam
          nulla natus. Mollitia vero, eaque exercitationem deleniti aperiam
          reiciendis ipsa quis?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
          consectetur autem animi assumenda quia voluptate neque vero debitis
          temporibus blanditiis soluta numquam, enim iste velit ullam. Aut harum
          culpa ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          recusandae qui vero laborum est atque quasi perferendis quisquam ab et
          tempora sit laudantium dolorum dignissimos cupiditate, aperiam ex
          repellat eligendi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          tempore! Officiis sapiente deleniti ad reiciendis animi! Ipsa, animi?
          Delectus quam iusto ipsum eligendi aliquam excepturi doloremque
          voluptatibus optio praesentium laudantium. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Doloremque distinctio cupiditate
          provident necessitatibus tempora architecto, velit enim eos, magnam
          nulla natus. Mollitia vero, eaque exercitationem deleniti aperiam
          reiciendis ipsa quis?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
          consectetur autem animi assumenda quia voluptate neque vero debitis
          temporibus blanditiis soluta numquam, enim iste velit ullam. Aut harum
          culpa ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          recusandae qui vero laborum est atque quasi perferendis quisquam ab et
          tempora sit laudantium dolorum dignissimos cupiditate, aperiam ex
          repellat eligendi.
        </p>
      </div>
    </div>
  )
}
