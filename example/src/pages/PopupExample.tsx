import { Typography, Box, Paper, Stack } from "@mui/material";
import { ExternalLink } from "@ehfuse/mui-external-link";

export default function PopupExample() {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                팝업 예제 (Popup Mode)
            </Typography>
            <Paper sx={{ p: 3, mt: 2 }}>
                <Typography variant="body1" paragraph>
                    팝업 모드에서는 새 팝업 창에서 링크를 엽니다. 브라우저에서
                    팝업이 차단된 경우 대체 다이얼로그가 표시됩니다.
                </Typography>

                <Stack spacing={2} sx={{ mt: 3 }}>
                    <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                            기본 팝업 (1000x850):
                        </Typography>
                        <ExternalLink
                            href="https://github.com"
                            openMode="popup"
                            title="GitHub"
                        >
                            GitHub 팝업으로 열기
                        </ExternalLink>
                    </Box>

                    <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                            크기 지정된 팝업:
                        </Typography>
                        <ExternalLink
                            href="https://google.com"
                            openMode="popup"
                            width={600}
                            height={400}
                            title="Google 검색"
                        >
                            Google 600x400 팝업으로 열기
                        </ExternalLink>
                    </Box>
                </Stack>
            </Paper>
        </Box>
    );
}
