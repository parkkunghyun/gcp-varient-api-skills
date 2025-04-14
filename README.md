# GCP 기반 AI 서비스 플랫폼: 챗봇, 번역, OCR 통합 시스템

> **1인 개발 프로젝트**

이 프로젝트는 Google Cloud Platform(GCP)의 AI API를 활용하여 챗봇, 번역, OCR 기능을 통합한 서비스입니다.  
사용자는 실시간 챗봇 응답, 다양한 언어 간 번역, 이미지에서 텍스트를 추출하는 OCR 기능을 경험할 수 있습니다.  
GCP 기반 AI 기술을 실용적으로 활용하여 효율적인 서비스를 제공합니다.

- **배포 사이트**: [https://gcp-api-dumps-852089656314.us-central1.run.app](https://gcp-api-dumps-852089656314.us-central1.run.app)  
- **GitHub 코드**: [https://github.com/parkkunghyun/gcp-varient-api-skills](https://github.com/parkkunghyun/gcp-varient-api-skills)

---

## 🛠 프로젝트 기술 스택 및 최적화

- **React Query**를 활용해 Translate API와 TTS API 호출을 최적화하고,  
  불필요한 네트워크 요청 제거 → 평균 응답 속도 1000ms → **120ms 수준으로 개선**
- **GitHub Actions 기반 CI/CD** 파이프라인 구축  
  → 코드 Push 시 자동 배포 (GitHub Actions + Google Cloud Run)
- **Cloud Run** 사용으로 하루 배포 비용 **400원 → 30원 미만으로 절감**  
  → 24시간 서버 유지가 필요한 VM 방식 대신 서버리스 구조 채택

---

## 🤖 AI 및 API 통합

- **Gemini AI**를 활용한 챗봇 기능  
  → 사용자가 자연어로 질문 시, **3줄 이내** 응답으로 가독성 확보
- **Google Translate API + Text-to-Speech API**를 통해 실시간 번역 및 음성 변환 지원
- **Google Cloud Vision API**를 이용해 OCR 백엔드 구현  
  → Next.js 프레임워크에서 직접 AI 모델을 돌리지 않도록 설계하여 **서버 부담 감소**
- **Node.js 기반 백엔드**를 **GCP VM 인스턴스**에 배포  
  → **PM2**를 이용해 서버가 24시간 안정적으로 가동되도록 구성

---

## 📦 기술 스택

- **Frontend**: Next.js, React, Tailwind CSS, Tanstack Query  
- **Backend**: Node.js, Express  
- **API**: Google Translate API, Text-to-Speech API, Cloud Vision API, Gemini AI API  
- **Deployment**: Cloud Run, VM (GCP Compute Engine), GitHub Actions

---

감사합니다 🙌
