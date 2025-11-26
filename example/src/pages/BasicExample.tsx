import { Typography, Box, Paper, Stack, Button } from "@mui/material";
import { ExternalLink } from "@ehfuse/mui-external-link";

export default function BasicExample() {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                기본 예제 (Default Mode)
            </Typography>
            <Paper sx={{ p: 3, mt: 2 }}>
                <Typography variant="body1" paragraph>
                    기본 모드에서는 외부 도메인 링크 클릭 시 보안 경고
                    대화상자가 표시됩니다.
                </Typography>

                <Stack spacing={2} sx={{ mt: 3 }}>
                    <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                            외부 링크 (경고 대화상자 표시):
                        </Typography>
                        <ExternalLink href="https://github.com">
                            GitHub로 이동
                        </ExternalLink>
                    </Box>

                    <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                            title이 있는 링크 (툴팁 표시, 경고창 표시):
                        </Typography>
                        <ExternalLink
                            href="https://google.com"
                            title="Google 검색 엔진입니다"
                        >
                            Google로 이동 (툴팁 있음)
                        </ExternalLink>
                    </Box>

                    <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                            신뢰할 수 있는 링크 (경고창 없이 바로 이동):
                        </Typography>
                        <ExternalLink
                            href="https://google.com"
                            title="Google 검색"
                            trusted
                        >
                            Google로 이동 (trusted)
                        </ExternalLink>
                    </Box>

                    <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                            상대 경로 링크 (바로 이동):
                        </Typography>
                        <ExternalLink href="/about">
                            About 페이지로 이동
                        </ExternalLink>
                    </Box>

                    <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                            다이얼로그에 왼쪽 콘텐츠 추가:
                        </Typography>
                        <ExternalLink
                            href="https://naver.com"
                            dialog={{
                                leftActions: (
                                    <Button
                                        size="small"
                                        onClick={() => alert("도움말 클릭!")}
                                    >
                                        도움말
                                    </Button>
                                ),
                            }}
                        >
                            네이버로 이동 (왼쪽 도움말 버튼 있음)
                        </ExternalLink>
                    </Box>

                    <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                            커스텀 타이틀 텍스트:
                        </Typography>
                        <ExternalLink
                            href="https://kakao.com"
                            dialog={{
                                titleText: "카카오로 이동합니다",
                            }}
                        >
                            카카오로 이동 (커스텀 타이틀)
                        </ExternalLink>
                    </Box>

                    <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                            커스텀 타이틀 스타일:
                        </Typography>
                        <ExternalLink
                            href="https://daum.net"
                            dialog={{
                                titleText: "⚠️ 외부 사이트 이동",
                                titleStyle: {
                                    color: "#d32f2f",
                                    fontWeight: "bold",
                                },
                            }}
                        >
                            다음으로 이동 (빨간색 굵은 타이틀)
                        </ExternalLink>
                    </Box>

                    <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                            X 버튼 없는 다이얼로그:
                        </Typography>
                        <ExternalLink
                            href="https://tistory.com"
                            dialog={{
                                showCloseButton: false,
                            }}
                        >
                            티스토리로 이동 (X 버튼 없음)
                        </ExternalLink>
                    </Box>
                </Stack>
            </Paper>
        </Box>
    );
}
