/*
 * @lc app=leetcode.cn id=206 lang=cpp
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
// recursion way, not recommend in this case
    // ListNode* reverseList(ListNode* head) {
    //     if (head == nullptr || head -> next == nullptr) return head;
    //     ListNode *tail = head -> next, *prev = reverseList(head -> next);
    //     head -> next = tail -> next;
    //     tail -> next = head;
    //     return prev;
    // }
    ListNode* reverseList(ListNode* head) {
        if (head == nullptr || head -> next == nullptr) return head;
        ListNode* curr = head;
        ListNode* prev = nullptr;
        while(curr) {
          ListNode* next = curr -> next;
          curr -> next = prev;
          prev = curr;
          curr = next;  
        }
        return prev;
    }
};
// @lc code=end

