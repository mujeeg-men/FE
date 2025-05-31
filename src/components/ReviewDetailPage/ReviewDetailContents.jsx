import COLOR from "@/constants/color";

const ReviewDetailContents = ({data, id})=>{
    // console.log(data, id)
    return <div style={{padding: '20px 0', borderBottom: `1px solid ${COLOR.gray}`}}>
        <span style={{whiteSpace: 'pre-wrap'}}>{data[id].reviewText}</span>
    </div>
}

export default ReviewDetailContents;