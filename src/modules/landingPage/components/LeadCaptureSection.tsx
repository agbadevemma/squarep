import BannerSection from '@/sharedcomponents/BannerSection'
import bg from "../../../../public/images/bgs/banner.svg";

type Props = {}

const LeadCaptureSection = (props: Props) => {
  return (
    <div >
         <BannerSection
        bg={bg}
        description="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
        title="Thank you for your Interest in SquareUp."
        leadCapture={true}
      />
    </div>
  )
}

export default LeadCaptureSection