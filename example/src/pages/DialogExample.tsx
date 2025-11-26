import { Typography, Box, Paper, Stack } from "@mui/material";
import { ExternalLink } from "@ehfuse/mui-external-link";

export default function DialogExample() {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                다이얼로그 예제 (Dialog Mode)
            </Typography>
            <Paper sx={{ p: 3, mt: 2 }}>
                <Typography variant="body1" paragraph>
                    다이얼로그 모드에서는 iframe을 사용하여 Dialog 내부에
                    웹페이지를 표시합니다. 일부 웹사이트는 X-Frame-Options
                    정책으로 인해 iframe에서 표시되지 않을 수 있습니다.
                </Typography>

                <Stack spacing={2} sx={{ mt: 3 }}>
                    <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                            다이얼로그로 열기:
                        </Typography>
                        <ExternalLink
                            href="https://example.com"
                            openMode="dialog"
                            title="Example.com"
                        >
                            Example.com 다이얼로그로 보기
                        </ExternalLink>
                    </Box>

                    <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                            크기 지정된 다이얼로그:
                        </Typography>
                        <ExternalLink
                            href="https://example.com"
                            openMode="dialog"
                            width={800}
                            height={600}
                            title="크기 지정된 다이얼로그"
                        >
                            800x600 다이얼로그로 보기
                        </ExternalLink>
                    </Box>
                </Stack>
            </Paper>
        </Box>
    );
}
