export const Card = ({ icon, title, text }) => {
  return (
    <div className="pt-4 px-6 pb-14 basis-auto dark:bg-bg200 bg-secondary rounded-xl border-solid dark:border-white dark:border">
      {icon}
      <h3 className="font-bold text-2xl text-white mt-6">{title}</h3>
      <p className="text-sm text-white mt-4 text-justify w-full max-w-xl">
        {text}
      </p>
    </div>
  )
}
