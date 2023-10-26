// import React from 'react'
import UploadNav from '../../components/Header/UploadHeader'
// export default function Posting() {
//   return (
//     <div>
//       <UploadNav />
//       Posting</div>
//   )
// }

import React from 'react'
import Modal from '../../components/common/Modal/AnalysisModal';

export default function Posting() {
  return (
    <div>
      <UploadNav />
      운동분석 모달 테스트 중
      <Modal />
    </div>
  )
}