import mockShared from "~~/static/mock/m2-payload-shared";
import mockHome from "~~/static/mock/m2-payload-home";

export const state = () => ({
  header: {},
  footer: {},
  head: {},
  referenzen: {},
  vorteile: {}
});

export const mutations = {
  SET_SECTION_HEADER(state, payload) {
    state.header = payload;
  },
  SET_SECTION_FOOTER(state, payload) {
    state.footer = payload;
  },
  SET_SECTION_HEAD(state, payload) {
    state.head = payload;
  },
  SET_SECTION_REFERENZEN(state, payload) {
    state.referenzen = payload;
  },
  SET_SECTION_VORTEILE(state, payload) {
    state.vorteile = payload;
  }
};

export const actions = {
  getSectionHeader({ commit }) {
    commit("SET_SECTION_HEADER", mockShared.section_navbar);
  },
  getSectionFooter({ commit }) {
    commit("SET_SECTION_FOOTER", mockShared.section_footer);
  },
  getSectionHead({ commit }) {
    commit("SET_SECTION_HEAD", mockHome.section_head);
  },
  getSectionReferenzen({ commit }) {
    commit("SET_SECTION_REFERENZEN", mockHome.section_referenzen);
  },
  getSectionVorteile({ commit }) {
    commit("SET_SECTION_VORTEILE", mockHome.section_vorteile);
  }
};
