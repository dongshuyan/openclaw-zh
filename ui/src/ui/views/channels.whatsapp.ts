import { html, nothing } from "lit";

import { formatAgo } from "../format";
import type { WhatsAppStatus } from "../types";
import type { ChannelsProps } from "./channels.types";
import { renderChannelConfigSection } from "./channels.config";
import { formatDuration } from "./channels.shared";
import { t } from "../i18n/index.js";

export function renderWhatsAppCard(params: {
  props: ChannelsProps;
  whatsapp?: WhatsAppStatus;
  accountCountLabel: unknown;
}) {
  const { props, whatsapp, accountCountLabel } = params;

  return html`
    <div class="card">
      <div class="card-title">${t("whatsapp.title")}</div>
      <div class="card-sub">${t("whatsapp.sub")}</div>
      ${accountCountLabel}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${t("channels.configured")}</span>
          <span>${whatsapp?.configured ? t("channels.yes") : t("channels.no")}</span>
        </div>
        <div>
          <span class="label">${t("whatsapp.linked")}</span>
          <span>${whatsapp?.linked ? t("channels.yes") : t("channels.no")}</span>
        </div>
        <div>
          <span class="label">${t("channels.running")}</span>
          <span>${whatsapp?.running ? t("channels.yes") : t("channels.no")}</span>
        </div>
        <div>
          <span class="label">${t("channels.connected")}</span>
          <span>${whatsapp?.connected ? t("channels.yes") : t("channels.no")}</span>
        </div>
        <div>
          <span class="label">${t("whatsapp.lastConnect")}</span>
          <span>
            ${whatsapp?.lastConnectedAt
              ? formatAgo(whatsapp.lastConnectedAt)
              : t("common.na")}
          </span>
        </div>
        <div>
          <span class="label">${t("whatsapp.lastMessage")}</span>
          <span>
            ${whatsapp?.lastMessageAt ? formatAgo(whatsapp.lastMessageAt) : t("common.na")}
          </span>
        </div>
        <div>
          <span class="label">${t("whatsapp.authAge")}</span>
          <span>
            ${whatsapp?.authAgeMs != null
              ? formatDuration(whatsapp.authAgeMs)
              : t("common.na")}
          </span>
        </div>
      </div>

      ${whatsapp?.lastError
        ? html`<div class="callout danger" style="margin-top: 12px;">
            ${whatsapp.lastError}
          </div>`
        : nothing}

      ${props.whatsappMessage
        ? html`<div class="callout" style="margin-top: 12px;">
            ${props.whatsappMessage}
          </div>`
        : nothing}

      ${props.whatsappQrDataUrl
        ? html`<div class="qr-wrap">
            <img src=${props.whatsappQrDataUrl} alt="WhatsApp QR" />
          </div>`
        : nothing}

      <div class="row" style="margin-top: 14px; flex-wrap: wrap;">
        <button
          class="btn primary"
          ?disabled=${props.whatsappBusy}
          @click=${() => props.onWhatsAppStart(false)}
        >
          ${props.whatsappBusy ? t("whatsapp.working") : t("whatsapp.showQR")}
        </button>
        <button
          class="btn"
          ?disabled=${props.whatsappBusy}
          @click=${() => props.onWhatsAppStart(true)}
        >
          ${t("whatsapp.relink")}
        </button>
        <button
          class="btn"
          ?disabled=${props.whatsappBusy}
          @click=${() => props.onWhatsAppWait()}
        >
          ${t("whatsapp.waitForScan")}
        </button>
        <button
          class="btn danger"
          ?disabled=${props.whatsappBusy}
          @click=${() => props.onWhatsAppLogout()}
        >
          ${t("whatsapp.logout")}
        </button>
        <button class="btn" @click=${() => props.onRefresh(true)}>
          ${t("overview.refresh")}
        </button>
      </div>

      ${renderChannelConfigSection({ channelId: "whatsapp", props })}
    </div>
  `;
}
