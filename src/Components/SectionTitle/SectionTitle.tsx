type SectionTitleProp = {
  title: string,
  mb: string,
  textAlign?: string

}
const SectionTitle = (props: SectionTitleProp) => {
  const margin = props.mb || 'mb-0'
  const textAlign = props.textAlign || 'center'
  return (
    <div className={`w-full flex items-center  ${textAlign === 'center' ? `justify-center` : 'justify-start'
      }`}>
      <h3 className={`text-3xl text-[#272343] font-semibold font-inter capitalize ${margin}`}>{props.title}</h3>
    </div>
  )
}

export default SectionTitle