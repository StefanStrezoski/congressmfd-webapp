<script setup>
import BaseContainer from "@/components/BaseContainer.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import BaseList from "@/components/BaseList.vue";
import ParagraphNoIndent from "@/components/ParagraphNoIndent.vue";
import {useI18n} from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <base-container>
    <base-card>
      <paragraph-no-indent class="text-center">
        <b><span class="text-orange-darken-3">
          {{ t('coursePage.title1') }}<br/>
          {{ t('coursePage.title2') }}
        </span></b>
      </paragraph-no-indent>
      <base-paragraph>{{ t('intro') }}</base-paragraph>
      <base-paragraph>
        {{ t('coursePage.p1-1') }} <b>{{ t('coursePage.p1B') }}</b>{{ t('coursePage.p1-2') }}
      </base-paragraph>
      <base-paragraph>
        {{ t('coursePage.p2') }}
      </base-paragraph>
      <base-paragraph>{{ t('coursePage.p3') }}</base-paragraph>
      <base-list style="color: #134b7a">
        <li>
          {{ t('coursePage.l1i1') }}
        </li>
        <li>
          {{ t('coursePage.l1i2') }}

        </li>
        <li>
          {{ t('coursePage.l1i3') }}
        </li>
      </base-list>
      <base-paragraph>
        <b>{{ t('coursePage.p4B') }}</b> {{ t('coursePage.p4') }}
      </base-paragraph>
      <base-paragraph>
        <b>
          &#11088;{{ t('coursePage.p5') }}
        </b>
      </base-paragraph>
      <base-list style="color: #134b7a">
        <li>
          <b>{{ t('coursePage.l2i1B') }}</b> {{ t('coursePage.l4') }} <b>{{ t('coursePage.l4B2') }}</b> {{ t('coursePage.l4_2') }}
        </li>
        <li>
          <b>{{ t('coursePage.l5B') }}</b> {{ t('coursePage.l5') }} <b>{{ t('coursePage.l5B2') }}</b> {{ t('coursePage.l5_2') }}
        </li>
        <li class="special-item">
          &#11088;<b>{{ t('coursePage.l6B') }}</b>
        </li>
        <li>
          <b>{{ t('coursePage.l7B') }}</b> {{ t('coursePage.l7') }} <b>{{ t('coursePage.l7B2') }}</b> {{ t('coursePage.l7_2') }}
        </li>
        <li>
          <b>{{ t('coursePage.l8B') }}</b> {{ t('coursePage.l8') }} <b>{{ t('coursePage.l8B2') }}</b> {{ t('coursePage.l8_2') }}
        </li>
      </base-list>
      <base-paragraph>
        <b>{{ t('coursePage.p6B') }}</b> {{ t('coursePage.p6') }}
      </base-paragraph>
      <base-paragraph>
        <b>{{ t('coursePage.p7B') }}</b> {{ t('coursePage.p7') }} <b>{{ t('coursePage.p7B2') }}</b>{{ t('coursePage.p7_2') }}
      </base-paragraph>
      <base-paragraph class="text-center">
        <b>
          {{ t('coursePage.p8B') }}
        </b>
      </base-paragraph>
      <base-list class="font-weight-bold" style="color: #134b7a">
        <li>
          {{ t('coursePage.l9') }}
        </li>
        <li>
          {{ t('coursePage.l10') }}
        </li>
        <li>
          {{ t('coursePage.l11') }}
        </li>
      </base-list>
      <base-paragraph>
        <b>{{ t('coursePage.p9B') }}</b>
      </base-paragraph>
    </base-card>
  </base-container>
</template>

<style scoped>
.special-item {
  list-style: none;
  padding-left: 0;
}
</style>
