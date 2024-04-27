import SupportTabsMenu from "./SupportTabsMenu";

const Page = () => {
  return (
    <div className='lg:mx-[15%] xl:mx-[20%] '>
      <h1 className='text-center text-mint text-4xl font-semibold'>Ways to Support</h1>
      <div className='mt-4'>
        <SupportTabsMenu />
      </div>
    </div>
  )
}

export default Page;