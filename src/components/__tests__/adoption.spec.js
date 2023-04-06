import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Adoption from "@/Adoption.vue";

describe("Adoption", () => {
  it("renders the component", () => {
    const wrapper = shallowMount(Adoption);
    expect(wrapper.exists()).toBe(true);
  });

  it("updates the itemsShown value when the List component emits the itemsShownChanged event", async () => {
    const wrapper = shallowMount(Adoption);
    const list = wrapper.findComponent({ name: "List" });
    const originalItemsShown = wrapper.vm.itemsShown;
    await list.vm.$emit("itemsShownChanged", 10);
    expect(wrapper.vm.itemsShown).toBe(originalItemsShown + 10);
  });

  it("updates the itemsShown value when the List component emits the itemsShownChanged event", async () => {
    const wrapper = shallowMount(Adoption);
    const list = wrapper.findComponent({ name: "List" });
    const originalItemsShown = wrapper.vm.itemsShown;
    await list.vm.$emit("itemsShownChanged", 10);
    expect(wrapper.vm.itemsShown).toBe(originalItemsShown + 10);
  });

  it("updates the searchTerm value when the ActionBar component emits the searchTermChanged event", async () => {
    const wrapper = shallowMount(Adoption);
    const actionBar = wrapper.findComponent({ name: "ActionBar" });
    const newSearchTerm = "new search term";
    await actionBar.vm.$emit("searchTermChanged", newSearchTerm);
    expect(wrapper.vm.searchTerm).toBe(newSearchTerm);
  });

  it("updates the filter value when the ActionBar component emits the filterChanged event", async () => {
    const wrapper = shallowMount(Adoption);
    const actionBar = wrapper.findComponent({ name: "ActionBar" });
    const newFilter = {
      isYoungerThanSixMonths: true,
      isYoungerThanTwelveMonths: false,
      isBlack: true,
    };
    await actionBar.vm.$emit("filterChanged", newFilter);
    expect(wrapper.vm.filter).toEqual(newFilter);
  });

  it("updates the sort value when the ActionBar component emits the sortChanged event", async () => {
    const wrapper = shallowMount(Adoption);
    const actionBar = wrapper.findComponent({ name: "ActionBar" });
    const newSort = {
      sortType: "name",
      sortDirection: "desc",
    };
    await actionBar.vm.$emit("sortChanged", newSort);
    expect(wrapper.vm.sort).toEqual(newSort);
  });

  it("remove cat from cats array in data when successfulAdoption method is called", async () => {
    const wrapper = shallowMount(Adoption);
    const cats = wrapper.vm.cats;
    const catForRemoving = cats[0];
    wrapper.setData({ activeItem: catForRemoving });
    await wrapper.vm.successfulAdoption();
    expect(wrapper.vm.cats).not.toContain(catForRemoving);
  });

  it("check if preview modal is opened when sliderClick is emited from Slider component", async () => {
    const wrapper = shallowMount(Adoption);
    const slider = wrapper.findComponent({ name: "Slider" });
    const catId = 1;
    await slider.vm.$emit("sliderClick", catId);
    expect(wrapper.vm.previewModalActive).toBe(true);
  });

  it("check if confirmation modal is opened when catAdopted emits from List component", async () => {
    const wrapper = shallowMount(Adoption);
    const list = wrapper.findComponent({ name: "List" });
    const catId = 1;
    await list.vm.$emit("catAdopted", catId);
    expect(wrapper.vm.confirmationModalActive).toBe(true);
  });
});
