<script>
import List from "./components/List.vue";
import SearchSortFilter from "./components/SearchSortFilter.vue";
import Slider from "./components/Slider.vue";
import cats from "./assets/data/cats.json";
import PreviewModal from "./components/Modal/PreviewModal.vue";
import ConfirmationModal from "./components/Modal/ConfirmationModal.vue";
import Modal from "./components/Modal/Modal.vue";

export default {
  components: {
    Slider,
    SearchSortFilter,
    List,
    PreviewModal,
    ConfirmationModal,
    Modal,
  },
  data() {
    return {
      cats: cats.items,
      searchTerm: "",
      itemsShown: 20,
      previewModalActive: false,
      activeItemId: 0,
      confirmationModalActive: false,
      filter: {
        isYoungerThanSixMonths: false,
        isYoungerThanTwelveMonths: false,
        isBlack: false,
      },
      sort: {
        sortType: "age",
        sortDirection: "asc",
      },
      slider: {
        sliderActive: false,
        sliderLeftToRight: true,
      },
    };
  },
  methods: {
    onSearchTermChanged(value) {
      this.searchTerm = value;
    },
    onFilterChanged(value) {
      this.filter = value;
    },
    onSortChanged(value) {
      this.sort = value;
    },
    onItemsShownChanged(value) {
      this.itemsShown = this.itemsShown + value;
      this.sort.sortType = "age";
      this.sort.sortDirection = "asc";
    },
    onAdoptClickFromCard(value) {
      this.confirmationModalActive = true;
      this.activeItem = this.cats.find((cat) => cat.id === value);
      document.body.classList.add("modal_open");
    },
    onAdoptClickFromModal(value) {
      this.previewModalActive = false;
      this.confirmationModalActive = true;
    },
    onCloseModal() {
      console.log("V");
      this.previewModalActive = false;
      document.body.classList.remove("modal_open");
    },
    onCloseConfirmation() {
      this.confirmationModalActive = false;
      document.body.classList.remove("modal_open");
    },
    onSliderClick(value) {
      this.activeItem = value;
      this.previewModalActive = true;
      document.body.classList.add("modal_open");
    },
    successfulAdoption() {
      this.confirmationModalActive = false;
      this.cats = this.cats.filter((cat) => cat.id !== value);
      this.activeItem = {};
      document.body.classList.remove("modal_open");
    },
    canceledAdoption() {
      this.confirmationModalActive = false;
      document.body.classList.remove("modal_open");
    },
  },
  computed: {
    moreItemsToShow() {
      return this.filteredItems.length && this.cats.length > this.itemsShown;
    },
    filteredItems() {
      let filteredCats = this.cats.filter((cat) => {
        if (this.filter.isYoungerThanSixMonths && cat.age > 6) {
          return false;
        }
        if (this.filter.isYoungerThanTwelveMonths && cat.age > 12) {
          return false;
        }
        if (this.filter.isBlack && cat.color.toLowerCase() !== "black") {
          return false;
        }
        if (
          this.searchTerm &&
          !cat.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        ) {
          return false;
        }
        return true;
      });

      if (this.sort.sortType === "name") {
        filteredCats = filteredCats.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        if (this.sort.sortDirection === "desc") {
          filteredCats = filteredCats.reverse();
        }
      } else if (this.sort.sortType === "age") {
        filteredCats = filteredCats.sort((a, b) => a.age - b.age);
        if (this.sort.sortDirection === "desc") {
          filteredCats = filteredCats.reverse();
        }
      }

      return filteredCats.slice(0, this.itemsShown);
    },
  },
};
</script>

<template>
  <div class="main">
    <Slider @sliderClick="onSliderClick" />
    <SearchSortFilter
      @searchTermChanged="onSearchTermChanged"
      @filterChanged="onFilterChanged"
      @sortChanged="onSortChanged"
    />
    <List
      :items="filteredItems"
      :moreItemsToShow="moreItemsToShow"
      @itemsShownChanged="onItemsShownChanged"
      @catAdopted="onAdoptClickFromCard"
    />
    <Modal v-if="previewModalActive" @close="onCloseModal">
      <PreviewModal
        :activeItem="activeItem"
        @catAdopted="onAdoptClickFromModal"
      />
    </Modal>
    <Modal
      v-if="confirmationModalActive"
      @close="onCloseConfirmation"
      :closeOnBackdropClick="false"
    >
      <ConfirmationModal
        :activeItem="activeItem"
        @successAdopt="successfulAdoption"
        @cancelAdopt="canceledAdoption"
      />
    </Modal>
  </div>
</template>

<style lang="scss" scoped>
.main {
  min-height: 100vh;
}
</style>
