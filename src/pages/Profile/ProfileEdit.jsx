import React, { useState } from 'react';
import ProfileEditNav from '../../components/Header/ProfileEditHeader';
import { ImageSection, Label, Image, ImageInput, Form, Container } from './ProfileEditStyle';
import Input from '../../components/common/Input/Input';


export default function ProfileEdit() {
  const [image, setImage] = useState('');

  return (
    <div>
        <ProfileEditNav />
        <Container>
          <Form>
            <ImageSection>
              <Label htmlFor='upload-image'>
                <Image src={image} alt="사용자 프로필 이미지" />
              </Label>
              <ImageInput
                type='file'
                accept='image/png, image/jpg, image/jpeg, image/svg'
                id='upload-image'
              />
            </ImageSection>

            <Input 
              label="사용자 이름"
              placeholder="2~10자 이내여야 합니다."
              id="username"
              type="text"
              name="username"
              required
            />

            <Input 
              label="계정 ID"
              placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
              id="accountname"
              type="text"
              name="accountname"
              required
            />

            <Input 
              label="소개"
              placeholder="자신에 대해 소개해 주세요!"
              id="intro"
              type="text"
              name="intro"
              required
            />
          </Form>
        </Container>
    </div>
  )
}
