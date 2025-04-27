import COLOR from "@/constants/color";

const ReviewDetailContents = ({data})=>{
    return <div style={{padding: '20px 0', borderBottom: `1px solid ${COLOR.gray}`}}>
        <span style={{whiteSpace: 'pre-wrap'}}>{data.reviewContents}</span>
    </div>
}

export default ReviewDetailContents;