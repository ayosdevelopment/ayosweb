export const Title = ({ text }) => {
  return (
    <div className="w-full flex justify-center">
      <h2
        className="max-w-lg font-bold text-2xl sm:text-3xl lg:text-4xl text-center dark:text-white text-bg100"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  )
}
