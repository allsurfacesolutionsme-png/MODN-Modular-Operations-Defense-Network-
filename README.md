
MODN separates concerns into:

- **Gateway Layer** → receives and normalizes requests
- **Policy Engine** → makes enforcement decisions
- **AI Layer (optional)** → risk scoring and suggestions
- **Audit System** → logs all decisions for compliance

---

# 🚀 Installation (Termux / Linux / Node.js)

## 1. Install dependencies

```bash
pkg update && pkg upgrade -y   # (Termux only)
pkg install nodejs git -y
