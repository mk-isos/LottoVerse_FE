import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1E90FF', // Primary 색상 (파란색)
    },
    secondary: {
      main: '#FFD700', // Secondary 색상 (노란색)
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // 기본 폰트 설정
    h4: {
      fontWeight: 600, // h4 태그 스타일
    },
    body1: {
      fontSize: '1rem', // 기본 본문 크기
    },
  },
  spacing: 8, // 기본 간격
});

export default theme;
