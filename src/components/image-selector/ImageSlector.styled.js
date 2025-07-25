import React from 'react';
import styled from 'styled-components';

export const CircleImageButton = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid #eeeeee;
  padding: 0;
  cursor: pointer;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 380px) {
    width: 40px;
    height: 40px;
  }
`;

export const SelectedImageContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  flex-shrink: 0;
`;

export const SelectedImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;

export const TextAndImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #555555;
  font-size: 16px;
`;

export const SelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  min-width: 320px;
  align-items: center;
`;
