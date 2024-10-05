import { Sample } from "../Sample"
import Adb2 from "../../assets/member/Adb2.jpg"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const Adb2MemberPage = () => {
    const bio = "Hello，我是陳彥宇，大學期間也是就讀臺北科技大學，現在是資安新手，請大家多多指教。"
    const certificates: MemberCertificateType[] = []
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "AIS3 Pre-exam 2024",
            result: "79/493",
            datetime: "2024.05.25-2024.05.27"
        },
        {
            title: "picoCTF 2024",
            result: "377/6957 Team(Name:PaLuPaLu)",
            datetime: "2024.03.13-2024.03.27"
        },
        {
            title: "TSCCTF 2024",
            result: "31/165",
            datetime: "2024.01.19-2024.01.22"
        }
    ]
    const participates: MemberParticipateType[] = [
        {
            title: "參加 SITCON 2024",
            datetime: "2024.03.09"
        }
    ]
    const internExperiences: MemberInternType[] = [{
        company: "HourLoop 飛輪電商有限公司",
        info: "負責維護系統前後端，新增使用者需求功能。",
        datetime: "2024.02.19-2024.06.30"
    }]
    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="陳彥宇"
            enName="Yan-Yu, Chen"
            avatar={Adb2}
            institutes={["國立臺北科技大學 資訊工程所 碩零"]}
            bio={bio}
            experiences={competitionExperiences}
            certificates={certificates}
            participates={participates}
            intern={internExperiences}
            journals={journals}
            conferences={conferences}
            techConfs={techConfs}
        ></Sample>
    )
}