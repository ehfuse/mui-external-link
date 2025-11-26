import { Typography, Box, Paper } from "@mui/material";

export default function HomePage() {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                ExternalLink 컴포넌트 예제
            </Typography>
            <Paper sx={{ p: 3, mt: 2 }}>
                <Typography variant="body1" paragraph>
                    이 예제 앱은 <code>@ehfuse/mui-external-link</code> 라이브러리의
                    사용법을 보여줍니다.
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    기능 목록:
                </Typography>
                <ul>
                    <li>
                        <Typography>
                            <strong>기본 모드</strong>: 외부 링크 클릭 시 보안
                            경고 대화상자 표시
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            <strong>다이얼로그 모드</strong>: iframe을 사용하여
                            Dialog 내부에 웹페이지 표시
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            <strong>팝업 모드</strong>: 새 팝업 창에서 링크 열기
                        </Typography>
                    </li>
                </ul>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 2 }}
                >
                    좌측 상단의 네비게이션을 사용하여 각 예제를 확인해보세요.
                </Typography>
            </Paper>
        </Box>
    );
}
